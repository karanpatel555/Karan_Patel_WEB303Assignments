/*
    Assignment 05
    Author's Name: Karan H Patel
    Date: October 27, 2023
*/

$("document").ready(function () {

    
    class ContentItem {
        
        
        constructor(id, f_name, description, category_genre) {
            this.id = id;
            this.f_name = f_name;
            this.description = description;
            this.category_genre = category_genre;
        }

        updateContentItem(id, f_name, description, category_genre) {

            if (this.id === id) {
                if (f_name !== null) {
                    this.f_name = f_name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (category_genre !== null) {
                    this.category_genre = category_genre;
                }
            }
        }

        toString() {
            let content = `<div class="content-item-wrapper" id="content-item-id${this.id}">`;
            content += `<h2>${this.f_name}</h2>`;
            content += `<p>${this.description}</p>`;
            content += `<div>${this.category_genre}</div>`;
            content += `</div>`;
            return content;
        }
    }

    let array = [
        new ContentItem(0, 'The Dark Knight', 'A 2008 superhero film directed by Christopher Nolan, based on the DC Comics character Batman.', 'Action'),
        new ContentItem(1, 'Wonder Woman', 'A 2017 superhero film based on the DC Comics character of the same name.', 'Action'),
        new ContentItem(2, 'Aquaman', 'A 2018 superhero film based on the DC Comics character of the same name.', 'Action'),
        new ContentItem(3, 'Man of Steel', 'A 2013 superhero film based on the DC Comics character Superman.', 'Action'),
        new ContentItem(4, 'Shazam!', 'A 2019 superhero film based on the DC Comics character of the same name.', 'Action')
    ];

    for (let i = 0; i < array.length; i++) {
        const cItem = array[i];
        const itemHtml = cItem.toString();
        $("#content-item-list").append(itemHtml);
    }

    $('.content-item-wrapper').css({
        'border': '1px solid #ccc',
        'width': '80%',
        'padding': '20px',
        'margin': '50px auto'
      });  


      // Button to update an existing ContentItem successfully
    $('#update-successful').on('click', function () {
        const itemToUpdate = array[0];
        itemToUpdate.updateContentItem('The Dark Knight Rises', 'A 2012 superhero film directed by Christopher Nolan, based on the DC Comics character Batman.', 'Action');
        const updatedHtml = itemToUpdate.toString();
        $('#content-item-id0').replaceWith(updatedHtml);
    });

    // Button to update an existing ContentItem unsuccessfully
    $('#update-unsuccessful').on('click', function () {
        const itemToUpdate = array[1];
        itemToUpdate.updateContentItem(null, null, null); // Passing null to all arguments to trigger the error
        const updatedHtml = itemToUpdate.toString();
        $('#content-item-id1').replaceWith(updatedHtml);
    });

    // Button styling
    $('button').css({
        'background-color': '#007bff',
        'color': '#fff',
        'border': 'none',
        'border-radius': '5px',
        'padding': '10px',
        'margin': '10px',
        'cursor': 'pointer'
    });

      
});



