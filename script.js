document.addEventListener('DOMContentLoaded', function() {
  const temporadas = ['Primavera 2021', 'Verano 2021', 'Otoño 2021', 'Invierno 2021'];

  document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Previene el envío normal del formulario
      const searchInput = document.getElementById('searchInput');
      const searchTerm = searchInput.value.toLowerCase();

      const resultados = temporadas.filter(temporada => temporada.toLowerCase().includes(searchTerm));

      if (resultados.length > 0) {
          alert('Resultados encontrados: ' + resultados.join(', '));
      } else {
          alert('No se encontraron coincidencias.');
      }
  });
});
