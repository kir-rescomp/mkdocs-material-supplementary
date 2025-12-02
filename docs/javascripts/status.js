fetch('/status/current.json')
  .then(response => response.json())
  .then(data => {
    //Render Status Dynamically
    const statusDiv = document.getElemmentById('cluster-status');
    data.services.forEach(service => {
      const statusClass = service.status === 'operational' ? 'success' : 'warning';
      statusDiv.innerHTML += '<div class="status-item ${statusClass}">${service.status}</div>';
    });
  });
