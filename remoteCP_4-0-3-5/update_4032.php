<?php
/**
* remoteCP 4
* ütf-8 release
*
* @package remoteCP
* @author hal.sascha
* @copyright (c) 2006-2009
* @version 4.0.3.5
*/

/**
 * Parameters handling
 */
$_REQUEST['autologin'] = true;
$_REQUEST['serverid']  = $_REQUEST['serverid'];

/**
 * Create Core
 */
set_time_limit(0);
require_once './includes/core.class.php';
$core = Core::singleton();
Core::storeCoreSettings();
Core::storeSetting('httppath', $_SERVER['argv'][5]);
Core::storeSetting('debug', false);
Core::storeSetting('time', time());
Core::storeCoreObjects();

/**
 * Show server select
 */
if(empty($_REQUEST['serverid'])) {
	echo "<h1><b>Select</b> server to update:</h1>\r\n";
	if(Core::getObject('session')->servers) {
		foreach(Core::getObject('session')->servers->children() as $node)
		{
			echo "<a href='update_4032.php?serverid=". (string) $node->id ."'> ". (string) $node->name ." (". (string) $node->connection->host ." - ". (string) $node->connection->port .")</a><br />\r\n";
		}
	} else {
		trigger_error('Unable to read server data, stopped updating...', E_USER_ERROR);
	}
	exit();
}

/**
 * Connect to database
 */
if(Core::getObject('session')->server->sql['enabled']) {
	Core::getObject('db')->newConnection(
		'update4032',
		Core::getObject('session')->server->sql['dsn'],
		Core::getObject('session')->server->sql['username'],
		Core::getObject('session')->server->sql['password']
	);
} else {
	trigger_error('Unable to connect to database, the selected server has not enabled sql settings, stopped updating...', E_USER_ERROR);
}

if(!Core::getObject('db')->checkConnection()) {
	trigger_error('Unable to connect to database, invalid sql settings or connection not possible, stopped updating...', E_USER_ERROR);
}

//########################################################
//Start update
echo "<pre>";

//Get Database PDO Object
$db = Core::getObject('db')->getConnection();

//Alter tables
echo "[Database tables] altering... \r\n";
$alter = $db->query("ALTER TABLE `rcp_records` ADD `CheckPoints` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL AFTER `Score`");
echo "\t\trcp_records";
if($alter) {
	echo "\t\t<span style='color:#00CC00;'>ALTERED!</span>\r\n";
	$alter->closeCursor();
} else {
	echo "\t\t<span style='color:#CC0000;'>ERROR!</span>\r\n";
	trigger_error('Unable to alter database table \'rcp_records\', stopped updating...', E_USER_ERROR);
}
$alter = null;

//Read challenges
echo "[Challenges] updating... \r\n";
$select = $db->query("SELECT Id, Name, BestCheckPoints FROM rcp_challenges WHERE 1");
if(!$select || !$select->columnCount()) {
	trigger_error('Unable to read challenges data, stopped updating...', E_USER_ERROR);
}
$challenges = $select->fetchAll(PDO::FETCH_OBJ);
$select->closeCursor();
$select = null;

//Prepare PDO queries
$pdoTopRec = $db->prepare("
	SELECT a.Id, a.Score, a.CheckPoints, b.Login
	FROM rcp_records AS a
	LEFT JOIN rcp_players AS b
		ON a.PlayerId = b.Id
	WHERE a.ChallengeId = :cid
	ORDER BY a.Score asc, a.Date asc, a.PlayerId asc
	LIMIT 0,1
");
$pdoUpdateRecs = $db->prepare("
	UPDATE rcp_records
	SET CheckPoints = :bestcps
	WHERE Id = :id
");

foreach($challenges AS $challenge)
{
	//Output Challenge Info
	echo "\t{$challenge->Id}\t{$challenge->Name}\r\n";

	//Get top record
	$pdoTopRec->bindParam('cid', $challenge->Id);
	$pdoTopRec->execute();
	if($pdoTopRec && $pdoTopRec->columnCount()) {
		$toprecord = $pdoTopRec->fetch(PDO::FETCH_OBJ);
		echo "\t\t{$toprecord->Login} with score: {$toprecord->Score}";

		$pdoUpdateRecs->bindParam('bestcps', $challenge->BestCheckPoints);
		$pdoUpdateRecs->bindParam('id', $toprecord->Id);
		$pdoUpdateRecs->execute();
		if($pdoUpdateRecs) {
			echo "\t\t\t<span style='color:#00CC00;'>UPDATED!</span>\r\n";
			$pdoUpdateRecs->closeCursor();
		} else {
			echo "\t\t\t<span style='color:#CC0000;'>ERROR!</span>\r\n";
		}

		$pdoTopRec->closeCursor();
	} else {
		echo "\t\t<span style='color:#FF9900;'>No top record available</span>\r\n";
	}
}
$pdoUpdateRecs = null;
$pdoTopRec = null;

//End update
echo "</pre>";
?>