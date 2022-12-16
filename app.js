(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')


    // Slider


    const buttons = document.querySelectorAll(".btn")
    const imgDiv = document.querySelector(".img-container")
    const pictures = [
        "5",
        "6",
        "7",
        "8"
    ];

    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left')){
                counter--
                if(counter < 0){
                    counter = pictures.length - 1
                }
                imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
            }

            if (button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length - 1){
                    counter = 0
                }
                imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
            }
            
        })

    })





    // Testimonial





    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }




    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)

    }





    createCustomer(0, 'Luka', 'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident nihil dolore doloremque repellendus ullam maiores repudiandae temporibus rem,illum quasi explicabo ad expedita blanditiis nam ut? Accusamus dolor qui sunt.')
    createCustomer(1, 'Nino', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nihil dolore doloremque repellendus ullam maiores repudiandae temporibus rem.')
    createCustomer(2, 'Giorgi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nihil dolore doloremque repellendus ullam maiores repudiandae temporibus rem.')
    createCustomer(3, 'Dato', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nihil dolore doloremque repellendus ullam maiores repudiandae temporibus rem.')
    createCustomer(4, 'Dato', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nihil dolore doloremque repellendus ullam maiores repudiandae temporibus rem.')

    btn.forEach(function(button) {

        button.addEventListener('click', function(e) {

            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }

                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }




            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }

                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

        })


    })













}) ()