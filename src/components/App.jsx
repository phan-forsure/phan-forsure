import React from 'react'
import Header from './Header'
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home'
import Login from './Login/Login';
import Footer from './Footer';
import Cart from './Cart/Cart';
import ProductsPage from './Products/ProductsPage';

export const products = {
    molokhia: 'مولوخيه',
    beans: 'فول',
    koshari: 'كشري',
    salad: 'سلطه',
    molokhiaPrice: 20,
    beansPrice: 16.5,
    koshariPrice: 22,
    saladPrice: 10,
    molokhiaSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRYVFhUYGRUYGhwZHBwcGhkaGB4ZGRwaGhkYGhocIC4lHB4sIRwcJjgmKy8xNTU1HCQ7QDs0Py40NjEBDAwMEA8QHxISHjcrISw0NDQxNDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0MTQ0NDQ0NP/AABEIAMEBBgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYHAf/EADkQAAEDAQYDBwQCAQQBBQAAAAEAAhEhAwQSMUFRBWFxBiIygZGh8LHB0eFCUhMjYrLxohUkcoKS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAICAgMBAAAAAAAAAAAAAQIRITESUQMiQTL/2gAMAwEAAhEDEQA/APZkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUFteA3mUE6jc8DMgLTX3jAbm6OQzWjvHHCfC3zKvj7HXPvrRufnNRHiI291xFpxK0P8o6Ks+/HW0/8lfrFd/8A+pj+vv8ApZjiLdj9V5u3ibMWEWwxZxjr9VZsr67+L56EFN4j0Rl8adY6qdrgciuBsuJvGcFbC7caGstO4U1Edevq1N14ni2cNxmtlZ2gcJBlLNCRERQEREBERAREQEREBERAREQEREBERAREQFiTC+rUcTv4aDWg91ZNiS/cQDQawN1y1/4u51GUG+qp8Qv5fLnGGj5VcVxbtE55LLDw5OflHIKZZzHpW84nxqzsqvdidMQKnz2XNcR7V2jqWQDQf5Gp8lpf8VJd3qzJNTOeSxY0ggQfmS5XK3lNrDeI29oYL3OnMaKC8g4orMHIkL6GGKHrvTkUxDEP1mJWdcojtGjpHrTPIZ/tSXZ9qIwvc0modlOY+3svjbMEkVG+W+6ycyAHOJDRTrn70Kt0Nlde0FvZw3FjGuLU7ToujuHaizeQ14wO5rjbIFzmyDAGZ5bbr7bOxNMluYEEdYJ22kKTLKXhrb1O7XnJzHU5Gi3dx4rUAmDuvFOG8TtLvOFxAnwkEz55Lu+BccZeW0MPGbfxyXbHPfFHqd2vYdQ0PsVaXE3C+lpAJpvsuquV7xCCa6Hdas9IuoiKAiIgIiICIiAiIgIiICIiAiIgIijtX4QSgqX+84QRPVcRxK+YyXEwwZflbPjt8JOAHPP8LzjthxgsixYYc7Pcc1cr4xWr7RcZdbPNmw4bNpqRmeXVapjO44NBgc8h8KjFmQABMHz81Mx5EQcjQ6cuua4JasYCcLQWz0kGagnYflZFob4gDpWYEZGUfbQysHMUgQRE5KuWuiYMEwKa6CmZgrPNRI/wCowh1BzqTX5omExiihjmsj3mtYeeW2/7Rj4GGndpWSIrkfdTlWeBoBORGla70Va/ux5GMJy+/sthYWWNjXNJJxHHTJogg1FQQc1HY2bXv772sbEUaTI08OZUl5a1VKzaAAQds9KVJ/Er5bvzrJmhHIQtjfm2ZOFmOACa0BcRnGlOSqsuzJc2js4dUCBBmd6wtSy8pYxDC9tPCCTBPrPl9FFcnvY/Gw4S0zOlKwp7AlrqAw3OBJrnM6I8AumIBNa0z1/SrL0HgnF22zQDGOKhdPw29Fpwk9CvGWXs2D2WrJiBjHKa/WhXqFwvQtGNe0zIBldfjy3xWnoN2tsQ5jNTrnuE3vI7UPRdACt2aR9REUBERAREQEREBERAREQEREHxa7ilvhB5BbFcx2ht+6RuVYOW4le8LX2jjuV5NebwbS0faO/kabwNvm67Pt3fMNmGDN5j55T6rjrs5oaGlpgHMUmDSp5SPNc8ryVsLs8NbMb92J2g+qitXNIcQ3UkknKYiBpr6jZLS0IyOHWJNQYiSNY15FZW9i42eMluEuAgRJrExE+ix12jFrJJBMknETnnnU57yvr7VocWTiDXQYJ0kZGuaOtg1paJwvpiNP8A6id/woGWMtLmiRiImJEuI1U77XSRrC5+YA0kkClanUxtsr15sMGCSCMBMiNIiKTPXRRcNDHPAfk4FoJNAcgd+XmVneLJocHwS6SDB/qS0YTz36LGWX2064TWO1Wwe5ohpgOPeNYGkE8h9Fs73dg+ybaseDSHN/qRGUfKo0ENwswkuOI0oARUGY56a5qpifZOgiMbS0gAEERlBnefJZ3u8LZqaqK8gwXYxL6kagAxBHl6Ks92mmZNc8vnVSOtAAG6Ec6cjSiluxDiQ1kAiIPLMncmF0nEcagsXHE2kA6/dbIgVyOk9NlWvN2wjE2YqN4MCR1BmqluRxDwmgjlM0VnKUt7LE092mw1HzRbnsFxIgusHHw1bOeEnLyP/Ja0Gabc+noqd2ebG3Y9piTBnZ1PqQfRb65V7HcLTC8bFdXcrSWxt9FxF2tcTWv3AK6zhlpUcx8+i7XmK2qIiygiIgIiICIiAiIgIiICIiDC0NCuM4+/vNHmuxvHhK4fjZ/1PJWdDy3tneS68NZo0E/T9rVWTzMTiaYzmla036flTdqHk3l+dBHuVTuraEE94bTpn8OxXG6KsOZ3pJoYGkkChiKEU3UgaK/yGggzUEzXIAKYWUlrZ0IygeU+i+XmzOGmdMBGRPIaUp1KztFC6kucWucACdQDHT8BXLwcBYGOcXGaE93CJiRuK1Vi42dmCIHfAAh0RiIESDpNKVGfTS3wOc5xMlwyaBQCuIGMqbLnvyr0YYyRbu5e+oLcDauIFGCczGpqYr7qUWhhzwXZNAoGAZYQdIgQear3clocDQAwW1EgCoMZAR7rMsIIc04f5RMQ07YsxMU6rFvLr4zS7cQHEDHgcWkvc8g+TYpOZE7VpRfLy+zeG4WxDoOLCJb4RiiK0BJyqobq1rauEtMhpFBMeGnXOqit3hzzgacIpmTUQSZmT0Vx5y3HP5LJjp8tzh7nic7+UaViIJmfpCsOcGNlvjB3qKmCeXRZXe2Dmu0eMMDZmGkkxLcpA5ZrC2tceEkNJFHESSciOczirJ0Xb8eZgy3c9wbArTUzJ1WwuzMOIAkVgbQtU0HES00EYiP4g6Ebq60FprmSTv3W5lXGC1ZWTQXO1I3++a13EWEMynTfcgznK2jbXEABXMQa5UVG+ggRXlAJM5eS3+D0fs3b47ux0zNf/wBAOg+q7DhL6M5H8BcN2MP/ALZn/wAR7AD6Bdrwrw+a64/y06VERZQREQEREBERAREQEREBERBDefCVxHGB3+oXc2w7p6LjuOshzT5KzoeLdr7Mi8PiZLQRrk4+1FBcIaA50aisCaiTOn7W37e2RZah41EetR91ow8UJM0FIE1+arj+aWtmb1QYBIPiyPLEeWk6YVj/AJInKkEUP9Tkev0VNpw0bHsau2BFKbKwwmkzhzJ1ia88yeqlrNSXcDvOLsMtIcABiJnQASBRsDmZ0WVwvOFj3AFj8UN7syaHxEyHHbKJ3Vexsh3jhFWA4YaQaioBBqQPTyWFkXPILnRiDhJawj+VC3IQSKxShWMpL26Y5a6ZusGgNe7PFEA0Jwl50NKV10UuEtcQHOdm1pAqILcxExUcpCkcW4A0QS2MThBaXHNxaM3QXGDqBVfbleGML3DvHEcDjiEvziND+6LllbJ7enGbQWQJdaSJc0NODDAkgSSIgSVcbdGB7WSR3ScRIgEVYSecZaclZ4uzG1lsw97C0mmRIIaMqEGKjfotZe7cua+Rga6HHE0yAAGgFvzMhMbvX4xlhrd7RWzwYGJpo7QgCmKs+RjRTtsAyHMePFEimpFJzj7rU3cuJhpBdkAQIiDJDYjJXrG3gYXgggyBz5+f3XZ5rH0vMOMZwSd3Rike9Oa2Niw0BMzoKzpEc6Gv4WuaHE96QDrQCmQA2yyU9haOxHFmKNMCcoNSJ50WpUWWQ1xyG3n/ABz3r5qlenHAXPNZGEbK8w4WgaD71VDiTy7CxubnAeZoFu9JHpPZVkXazn+jP+IXY8Kb3W83D6rnOF2QZZsaMop00XV8Ms/CPP57Lrjxi23aIiygiIgIiICIiAiIgIiICIiD4Qua45YywnUV/K6VaziNlMiKH75+/wBVYPIe3NzL7LG0VZX0rPpK4BllUOImopETUbUGfsvZuJXPEH2Z5/peRXy7PsbVzHbGJM0JMU1/7XPKapWRr3jArUfTy/C27MMYgxjG1ipL8RMgRMEVyzhaq72YdpsDG01PX9Kze7PCXNc4yyjAKDcEnXxLneeCVDb24l0U7uFpiugiudKTyCmuFu6yl2INcYMmHNIM+I1ryUD7cNjBNM98Wp6Ks0gE1MHPz6qa3CXVbaz4m8nC1oaS7/IXGI7tA1oAyFTGZU1vd2OcxwwtDnYn4AXQR/INzNc9pzWvsGNa0yKkgZyCc4wzvAPQFLw57pMuEvIJbGEAAENw1M5mCdVi4y9O+OV0tPvDCMJc8TAIgNGpDwTXXwrA2rWkHHJIcNYAAnARzNY0lVbS7tNmHBxnQGdMM4dNc+S+OswS1tciXEnMnPM5BSYQy+W9JeIXYOwvBDS7vABsS0nxCBHVVLGzeHga4iJkaVDumqPe1sRWKTXLlt5c1K10YXNcfOCeYzplTpoukmo45Xd2umygw5wFO7QjvTExpVYMte6xzjLpdQVBPh8iVgLUnuGRnX/bGcdD7KRgbh741Pey9+i1jNMrQIw4jTWOWcr5wK6m3vTDHdZ3vSjR9/JV73blrIMZaaTWB83XZdieGljC90S/vc5yAPQe5K13dEdbdrOS1oXVcPZmdqD56LRcLss3+QXTXezwtA116rtelTIiLIIiICIiAiIgIiICIiAiIgKC82eJvMfCFOiDkONXWe+Mxn03XnvbHghtWC0YO+z3Gy9fvthyofkLlOI3PAT/AEPyFcp5RXiV2vRaDSpoVcsWY4M1znM5TB3+y33afs7gLraybnUgLmGXwtJgCK0I1PJefXKJ7WyDpqG43T3dMzlNB5bKH/Ce/ScNKGag/YLFtuScI/ln8yClsrNsEB1aVyB5EkiNa8kqPt3tCS0Nq4QYAqS2mZEZfVbO5Xd7nF9syGsGKJqSahpGdSCa81pm2svxQABnAiG5ZdFZwlrmBjyA7AYybLSYxf7qZx+Fmx0xXLV7njEGtxl5c0BsAh4FBNJoOVCqD3ul2IlpEiKgDQgEDPT1UbXuBZOJgBMHxdQ3IESYMHVZsc9uKS0GZMgySRIqNNUk0l5RWVpEktzOe1IEc9VO6wiTQmPOoE0G1VG00rGdROs6jStVbfa1rUbzBE9aH9Je+GUWIPbMd6c5yGdANKhRvILY0mByA+2fosL3eBLYig0iK6dIVvhPDn3l7BUMECYig0oPdanQt9muEPvNo17h/pMO1CRy2XqlyuvhY0QB8KqcNuDbNrWMbyoukuN1ww0eJ2fJejHHU3VXrhYCRs36/PstosLKzDQANFIlu0ERFAREQEREBERAREQEREBERAREQYPaCIOS1F9umbXCWnI/NVulg9gIgiisuhwl+uRZIIlp+VXEdoOymMl9kBOrd16/e7pAMiW/M/ytFeuGasy2/CmWMyV4faXVzSQ9mB2VcucKCxqfCCKzUj5+163f+GMtBhewHqKrl+K9knYT/hInY7bA5LhccomnEuEE1G322U8tLYJqOefrlFSrz+zV4aCXMP1n0lVrvdHtcWljqf7RnoZOSmVhpiwNMMdIa10TnmT6aKs5uE0JgH2y+itG6PmMDiZBIjrFZUtnwi8WhJbZOGehznfI5qywqgTGs9Vcu1sDkO9Tuikxqt7w/sbaPH+oWtHId79LquE9mrCwgtbid/Z1T5KzG5dEcrwjsu62djtGYGmsec5LveH8PawBjG/lbC7XNztIG6210usd1ok6nbqV1x+OY81UNyumGKS8rfXW74RuTmfsOS+Xa7Bg3ccz9hsFYWrdo+oiKAiIgIiICIiAiIgIiICIiAiIgIiICIiD4qlvcwatofb9K4ibGgvVz/s2m+nqtda8LB8LvVdgq1pdGHSOlPor5exx7+HPH8Z6KF1ydqw+i7B3D9nkdQD9IUZuDv7NPkR+VfrVck25n+nspWXF+jV1AuL/AOzfdZDh51d6D8lPrBz9nww/yICuXe5tB7rS53r/ANLc2dwaM5d1P2FFZawAQAAOVE8vSKFjcSfEYH9R9z+Ffs2BogCAsl9WbQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=',
    beanSrc: 'data:image/jpeg;base64,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',
    koshariSrc: 'https://img.freepik.com/premium-photo/koshari-egyptian-cuisine-white-plate_864588-11238.jpg',
    saladSrc: 'https://img.freepik.com/premium-photo/bowl-salad-with-white-background_667286-1213.jpg',
    molokhiaType: 'Healthy',
    koshariType: 'Fast Food',
    beansType: 'Diet',
    saladType: 'Diet'
}

const App = () => {
    return (
        <div style={{animation: 'fadeIn .2s'}} className="app">
            <Header logo='دلع كرشك'/>
            <Routes>
                {['Home', ''].map((path) => <Route exact key={path} path={path} element={<Home />} />)}
                <Route path='/Login' element={<Login />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/Products' element={<ProductsPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App

// to start project: (navigate to terminal)
// if not in directory/folder of the project: cd '.\react apps\practice3\' 
// then: npm start, wait a few seconds and the application will run on browser