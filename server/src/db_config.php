<?php


define ("DB_USER", "root");
define ("DB_PASSWORD", "root");
define ("DB_DATABASE", "demo");
define ("DB_HOST", "mysql");


$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
?>