 
const fs = require('fs');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM("", { 
	url: "https://enterthegungeon.fandom.com/wiki/Guns", 
}); 
const $ = require( "jquery" )( window ); 
 
$.get("https://enterthegungeon.fandom.com/wiki/Guns", function(html) { 

    const gunHTMLElements = $(html).find('tr').slice(1, 240);
    const guns = [];
    //Loop through each row.
    gunHTMLElements.each((index, elem) => {
        //Look at individual tds and give meaningful names to the data.
        let tds = $(elem).children();
        const gun = {
            index: index,
            src: tds.filter('td:nth-child(1)').find('a').attr('href'),
            name: tds.filter('td:nth-child(2)').first().text().trim(), 
            quality: tds.filter('td:nth-child(5)').find('img').attr('alt').charAt(0) == '1' ? 'S': tds.filter('td:nth-child(5)').find('img').attr('alt').charAt(0),
            type: tds.filter('td:nth-child(6)').first().text().trim(),
            magSize: isNaN(parseInt(tds.filter('td:nth-child(8)').first().text().trim())) ? Number.MAX_SAFE_INTEGER: parseInt(tds.filter('td:nth-child(8)').first().text().match(/(\d+)/)[0]),
            ammoCap: isNaN(parseInt(tds.filter('td:nth-child(9)').first().text().trim())) ? Number.MAX_SAFE_INTEGER: parseInt(tds.filter('td:nth-child(9)').first().text().match(/(\d+)/)[0]),
            damage: isNaN(parseFloat(tds.filter('td:nth-child(10)').first().text().trim())) ? 0 : parseFloat(tds.filter('td:nth-child(10)').first().text().match(/[+-]?\d+(\.\d+)?/g)[0]),
            fireRate: isNaN(parseFloat(tds.filter('td:nth-child(11)').first().text().trim())) ? 0 : parseFloat(tds.filter('td:nth-child(11)').first().text().match(/[+-]?\d+(\.\d+)?/g)[0]),
            reloadTime: isNaN(parseFloat(tds.filter('td:nth-child(12)').first().text().trim())) ? 0 : parseFloat(tds.filter('td:nth-child(12)').first().text().match(/[+-]?\d+(\.\d+)?/g)[0])
        };

        guns.push(gun);
    });

    fs.writeFile("output.json", JSON.stringify(guns), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    }
 )
});