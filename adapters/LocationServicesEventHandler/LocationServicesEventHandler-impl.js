/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

function exitAreaEvent(event) {
  WL.Logger.info(JSON.stringify(event));
}

function dwellInsideArea(event) {
  WL.Logger.info(JSON.stringify(event));
}

WL.Server.setEventHandlers([
  WL.Server.createEventHandler({ event: 'exit area'}, exitAreaEvent),
  WL.Server.createEventHandler({ event: 'dwell inside area'}, dwellInsideArea)
]);
