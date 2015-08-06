var loginMe = (function () {

	// Инициализирует наш модуль
	var init = function () {
				_setUpListners();
			};

	// Прослушивает события 
	var _setUpListners = function () {
		$('#login').on('submit', _submitForm);
	};  

	var _submitForm = function(ev){
		console.log('Отправка формы');
		ev.preventDefault();

		var form = $(this),
				url = 'login.php',
				defObj = _ajaxForm(form, url);
				// что-то будем делать с ответом с сервера defObj
	};

	var _ajaxForm = function (form, url) {
		console.log('ajax запрос, но с проверкой!');
		if (!validation.validateForm(form)) return false;
		// если false то код ниже не произойдет никогда
		
	};

	// Возвращаем объект (публичные методы) 
	return {
			init: init
	};

})();

loginMe.init();