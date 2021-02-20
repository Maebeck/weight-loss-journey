import React from "react";

function JournalInfo() {
  return (
    <main>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Day of the Week</th>
            <th scope="col">Food Eaten</th>
            <th scope="col">Total Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Sunday</th>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Monday</th>
            <td>Mark</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Tuesday</th>
            <td>Jacob</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">Wednesday</th>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Thursday</th>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Friday</th>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Saturday</th>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
export default JournalInfo;
