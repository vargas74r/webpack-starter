import '../css/compenents.css';

// import wepackLogo from '../assets/img/webpack-logo.png';

export const greeting = (name='Nameless') => {
    console.log('Creating h1 label');

    const h1 = document.createElement('h1');
    h1.innerText = `Hi, ${name} !!`;
    document.body.append(h1);

    /*const img = document.createElement('img');
    img.src = wepackLogo;
    document.body.append(img);*/
}
