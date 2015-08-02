var myModule = (function () {

	//Инициализирует наш модуль
	var init = function () {
		_setUpListners();
		//то что должно произойти сразу!
		};
	
	//Прослушывает события
	var _setUpListners = function () {
		$('#add-new-item').on('click', _showModal); //открыть модальное окно
		$('#add-new-project').on('submit', _addProject); //добавление проекта

		};
	
	//Работает с модальным окном
	var _showModal = function (ev) {
			console.log ('Вызов модального окна');
			ev.preventDefault(); //отменить подпрыгивание экрана при нажатии на ссылку
			var divPopup = $('#new-project-popup'),
				form = divPopup.find('.form');

			divPopup.bPopup({
				speed: 650,
				transition: 'slideDown'
				onClose: function (){
					form.find('.server-mes').text('').hide();
				} 
			});
		};

	//Добавляет проект
	var _addProject = function (ev) {
			console.log ('Добавление проекта');
			ev.preventDefault(); //отменить стандартное поведение

			//объявляем переменные
			var form = $(this),
				url = 'add_project.php',
				myServerGiveMeAnAnswer = _ajaxForm(form, url);

			myServerGiveMeAnAnswer.done(function(ans) {
				console.log("ans");
				var succesBox = form.find('.succes-mes'),
					errorBox = form.find('.error-mes');
				if(ans.status === 'OK'){
					console.log(ans.text);
					errorBox.hide();
					succesBox.text(ans.text).show();
				}else{
					console.log(ans.text);
					succesBox.hide();
					errorBox.text(ans.text).show();
				}
			})
		};

	//Универсальная функция
	//Для ее работы используются
	//@form - форма
	//@url - адрес PHP файла, к которому мы обращаемся
	//1. собирает данные из формы
	//2. проверяет форму
	//3. делает запрос на сервер и возвравщает ответ с сервера
	var _ajaxForm = function (form, url) {

		// 1. Проверить форму
		// 2. Собрать данные из формы
		// 3. Вернуть ответ с сервера
		
		//if(!valid) return false; 
		data = form.serialize();
		var result = $.ajax({
				url: url,
				type: 'POST',
				dataType: 'json',
				data: data,
				}).fail( function(ans){
					console.log('Проблемы в PHP');
					form.find('.error-mes').text('На сервере произошла ошибка').show();
				});
				return result;
	};

	//Возвращаем объект (публичные методы)
	return {
		init: init
	};
})();

myModule.init();