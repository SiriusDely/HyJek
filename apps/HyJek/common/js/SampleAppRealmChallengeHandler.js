/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

*/

var sampleAppRealmChallengeHandler = WL.Client.createChallengeHandler("SampleAppRealm");

sampleAppRealmChallengeHandler.isCustomResponse = function(response) {
  if (!response || response.responseText === null) {
    return false;
  }
  var indicatorIdx = response.responseText.search('j_security_check');

  if (indicatorIdx >= 0){
    return true;
  }
  return false;
};

sampleAppRealmChallengeHandler.handleChallenge = function(response) {
  $('#AppDiv').hide();
  $('#AuthDiv').show();
  $('#AuthPassword').val('');
};

sampleAppRealmChallengeHandler.submitLoginFormCallback = function(response) {
  var isLoginFormResponse = sampleAppRealmChallengeHandler.isCustomResponse(response);
  if (isLoginFormResponse){
    sampleAppRealmChallengeHandler.handleChallenge(response);
  } else {
    $('#AppDiv').show();
    $('#AuthDiv').hide();
    sampleAppRealmChallengeHandler.submitSuccess();
  }
};

$('#AuthSubmitButton').bind('click', function () {
  var reqURL = '/j_security_check';
  var options = {};
  options.parameters = {
    j_username : $('#AuthUsername').val(),
    j_password : $('#AuthPassword').val()
  };
  options.headers = {};
  sampleAppRealmChallengeHandler.submitLoginForm(reqURL, options, sampleAppRealmChallengeHandler.submitLoginFormCallback);
});

$('#AuthCancelButton').bind('click', function () {
  sampleAppRealmChallengeHandler.submitFailure();
  $('#AppDiv').show();
  $('#AuthDiv').hide();
});

