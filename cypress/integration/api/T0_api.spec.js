describe('T0 api testing', ()=>{

    it('Get clima por cidade', ()=>{

        var city ='Fortaleza'

        cy.request({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=6ac29ecd2763cf699f03a8e3c7704c2b`
        }).then((res)=>{
            expect(res.status).to.equal(200); 
            expect(res.body).to.not.empty
            let clima=(res.body.weather[0].main)
            cy.log('Clima: ', clima)
            let descricao=(res.body.weather[0].description)
            cy.log('Descrição: ', descricao)
                
        })

    })

    it('Get clima por latidute e longitude', () => {

        var coordenadas = {
            "latitude": "-3.7227", 
            "longitude": "-38.5247"  
        }

        cy.request({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordenadas.latitude}&lon=${coordenadas.longitude}&lang=pt_br&appid=6ac29ecd2763cf699f03a8e3c7704c2b`
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body).to.not.empty
            let clima=(res.body.weather[0].main)
            cy.log('Clima: ', clima)
            let descricao=(res.body.weather[0].description)
            cy.log('Descrição: ', descricao)
        })     
    })
})