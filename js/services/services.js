const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: data,
    });

    return await res.json(); // повертаємо проміс з фетча, щоб можна було далі його обробити через then. Перш ніж повертати res.json потрібно створювати механізм, який дочекається результат роботи асинхроного коду
}

const getResource = async (url) => {
    const res = await fetch(url); 

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); // Об'єкт помилки дозволяє нам самим створити помилку

    }
    return await res.json();
}

export {postData};
export {getResource};