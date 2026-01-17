// Password check
function checkPass(){
  const pass = document.getElementById("adminPass").value;
  if(pass==="admin123"){ // change password
    document.getElementById("reportForm").style.display="block";
    alert("Access Granted ✅");
  } else {
    alert("Wrong Password ❌");
  }
}

// Save report (Admin Panel)
if(document.getElementById("reportForm")){
  document.getElementById("reportForm").addEventListener("submit", function(e){
    e.preventDefault();
    const report = {
      company: company.value,
      location: location.value,
      docNo: docNo.value,
      date: date.value,
      equipment: equipment.value,
      room: room.value,
      media: media.value,
      batch: batch.value
    };
    let reports = JSON.parse(localStorage.getItem("reports")) || [];
    reports.push(report);
    localStorage.setItem("reports", JSON.stringify(reports));
    alert("Report saved ✅");
    this.reset();
  });
}

// Display reports (Public Website)
if(document.getElementById("reports")){
  const reports = JSON.parse(localStorage.getItem("reports")) || [];
  const container = document.getElementById("reports");
  reports.forEach(r=>{
    container.innerHTML += `
      <div class="card">
        <h2>${r.company}</h2>
        <p><strong>Location:</strong> ${r.location}</p>
        <p><strong>Document No:</strong> ${r.docNo}</p>
        <p><strong>Date:</strong> ${r.date}</p>
        <table>
          <tr><th>Parameter</th><th>Details</th></tr>
          <tr><td>Equipment</td><td>${r.equipment}</td></tr>
          <tr><td>Room ID</td><td>${r.room}</td></tr>
          <tr><td>Sample Media</td><td>${r.media}</td></tr>
          <tr><td>Batch Size</td><td>${r.batch}</td></tr>
        </table>
      </div>
    `;
  });
}