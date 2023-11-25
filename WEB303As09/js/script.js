$(function () {
  let avengersCharactersData;

  var compare = {
    firstName: function (a, b) {
      a = a.replace(/^the /i, '');
      b = b.replace(/^the /i, '');

      return a.localeCompare(b);
    },
    date: function (a, b) {
      a = new Date(a);
      b = new Date(b);

      return a - b;
    }
  };

  $.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function (data) {
      avengersCharactersData = data;
      populateTable(avengersCharactersData);

      var amCount = 0;
      var nzCount = 0;
      avengersCharactersData.forEach(function (character) {
        const lastName = character.lastName.charAt(0).toLowerCase();

        if (lastName >= 'a' && lastName <= 'm') {
          amCount++;
          $('#filterAMCount').text(amCount);
        }

        if (lastName >= 'n' && lastName <= 'z') {
          nzCount++;
          $('#filterNZCount').text(nzCount);
        }
      });

      $('#firstNameSearch').on('input', function () {
        searchCharacters($(this).val());
      });

      $('.alphabetFilter').on('click', function () {
        filterCharacters($(this).data('filter'));
      });

      $('#avengersCharacterTable').each(function () {
        var $table = $(this);
        var $tbody = $table.find('tbody');
        var $controls = $table.find('th > a');
        var rowsDefault = $tbody.find('tr').toArray();

        $controls.on('click', function (e) {
          e.preventDefault();

          var $header = $(this);
          var order = $header.data('sort');
          var column;

          if ($header.is('.ascending') || $header.is('.descending')) {
            $header.toggleClass('ascending descending');
            rowsDefault.reverse();
          } else {
            $header.addClass('ascending');
            $header.parent().siblings().find('a').removeClass('ascending descending');

            if (compare.hasOwnProperty(order)) {
              column = $controls.index(this);
              rowsDefault.sort(function (a, b) {
                a = $(a).find('td').eq(column).text();
                b = $(b).find('td').eq(column).text();
                return compare[order](a, b);
              });
            }
          }
          $tbody.append(rowsDefault);
        });
      });
    }
  });

  function populateTable(characters) {
    var tbody = $('#avengersCharacterTable tbody');
    tbody.empty();

    characters.forEach(function (character) {
      var row = $('<tr>');
      row.append('<td>' + character.firstName + '</td>');
      row.append('<td>' + character.lastName + '</td>');
      row.append('<td>' + character.characterName + '</td>');
      row.append('<td>' + character.realName + '</td>');
      row.append('<td>' + character.gender + '</td>');
      row.append('<td>' + character.characterType + '</td>');
      row.append('<td>' + character.dob + '</td>');
      tbody.append(row);
    });
  }

  function searchCharacters(searchTerm) {
    var tbody = $('#avengersCharacterTable tbody');
    tbody.find('tr').removeClass('highlight');

    if (!searchTerm.length) {
      return;
    }

    avengersCharactersData.forEach(function (character, index) {
      const firstName = character.firstName.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();

      if (firstName.includes(searchTermLower)) {
        tbody.find('tr').eq(index).addClass('highlight');
      }
    });
  }

  function filterCharacters(filter) {
    var tbody = $('#avengersCharacterTable tbody');
    tbody.find('tr').hide();

    avengersCharactersData.forEach(function (character, index) {
      const lastName = character.lastName.charAt(0).toLowerCase();

      if (filter === 'A-M' && lastName >= 'a' && lastName <= 'm') {
        tbody.find('tr').eq(index).show();
      }

      if (filter === 'N-Z' && lastName >= 'n' && lastName <= 'z') {
        tbody.find('tr').eq(index).show();
      }
    });
  }
});
