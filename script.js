let data = [
    {Principal: 2500, time: 1.8},
    {Principal: 1000, time: 5},
    {Principal: 3000, time: 1},
    {Principal: 2000, time: 3}
    ];

    let interestCalculator = function(data) {
        for (let i = 0; i < data.length; i++) {
            switch (data) {
                case data[i].Principal >= 2500 && data[i].time > 1 && data[i].time < 3:
                    data[i].rate = 3;
                    break;
                case data[i].Principal >= 2500 && data[i].time >= 3:
                    data[i].rate = 4;
                    break;
                case data[i].Principal < 2500 || data[i].time <= 1:
                    data[i].rate = 2;    
                    break;
                default:
                    data[i].rate = 1;
                    break;
            }
            data[i].interest = data[i].Principal * data[i].time * data[i].rate / 100;
        }
        let interestData = [data];
    
    console.log(interestData);
    return interestData;

        
    };
    interestCalculator(data);
    