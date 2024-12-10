// Проверка формы записи на пробный урок
document.getElementById('trialLessonForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    alert('Вы успешно записались на пробный урок!');
});

// Обработка заявки на обратный звонок
document.getElementById('callbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    alert('Ваша заявка на обратный звонок отправлена!');
});