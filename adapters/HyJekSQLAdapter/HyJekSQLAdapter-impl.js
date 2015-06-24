/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 

//* postAddOrder(id_customer, posisi, tujuan, harga, tanggal)

function getCitiesWeather(){
	var cityList = getCitiesList(); 
	for (var i = 0; i < cityList.resultSet.length; i++) {
		var yahooWeatherData = getCityWeather(cityList.resultSet[i].identifier);
		
		if (yahooWeatherData.isSuccessful)
			cityList.resultSet[i].weather = yahooWeatherData.rss.channel.item.description;
	}
	return cityList;
}


var checkUsernamePasswordStatement = WL.Server.createSQLStatement("SELECT username, hak_akses, id_pengguna FROM login WHERE username=? AND password=?");
function checkUsernamePassword(username,password) {
	var user = WL.Server.invokeSQLStatement({
		preparedStatement : checkUsernamePasswordStatement,
		parameters : [username, password]
	});	
	
	for (var i = 0; i < user.resultSet.length; i++) {
		if (user.resultSet[i].hak_akses == "ojek"){
			user.resultSet[i].is_ojek = true;
			user.resultSet[i].keterangan = getInfoOjek(user.resultSet[i].id_pengguna).resultSet;
		}else{
			user.resultSet[i].is_ojek = false;
			user.resultSet[i].keterangan = getInfoCustomer(user.resultSet[i].id_pengguna).resultSet;
		}
	}
	
	return user;
}

var infoCustomerStatement = WL.Server.createSQLStatement("SELECT * FROM customer WHERE id_customer=?");
function getInfoCustomer(idCustomer) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : infoCustomerStatement,
		parameters : [idCustomer]
	});	
}

var infoOjekStatement = WL.Server.createSQLStatement("SELECT * FROM ojek WHERE id_ojek=?");
function getInfoOjek(idOjek) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : infoOjekStatement,
		parameters : [idOjek]
	});	
}

var queueOrderStatement = WL.Server.createSQLStatement("SELECT * FROM `order` WHERE id_ojek IS NULL or id_ojek = 0");
function getQueueOrder() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : queueOrderStatement,
		parameters : []
	});	
}

var grabOrderStatement = WL.Server.createSQLStatement("UPDATE `order` SET id_ojek=? WHERE id_order=? and (id_ojek is null or id_ojek=0)");
function postGrabOrder(idOjek, idOrder) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : grabOrderStatement,
		parameters : [idOjek, idOrder]
	});	
}

var addOrderStatement = WL.Server.createSQLStatement("INSERT INTO `order` (id_customer, tujuan_awal, tujuan_akhir, harga, tanggal_pemesanan) values (?, ?, ?, ?, now())");
function addGrabOrder(idCustomer, tujuanAwal, tujuanAkhir, harga) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : addOrderStatement,
		parameters : [idCustomer, tujuanAwal, tujuanAkhir, harga]
	});	
}







