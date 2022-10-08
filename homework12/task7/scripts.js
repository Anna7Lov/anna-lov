button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

/* Буде виведено 1 та 2. 
addEventListener спрацює, бо він не видалиться.
Щоб видалити обробник, потрібно передати саме ту функцію, яка була назначена. 
Тобто функцію обробник потрібно зберегти.
У цьому завданні ми передаємо для видалення іншу функцію з таким самим кодом.
button.onclick спрацює, він не залежить від роботи addEventListener. */