import React from 'react';

export default function Dashboard() {
  return(
  <main>
    <h2>Dashboard</h2>
    <form>
      <input id='start-weight' type='number' placeholder='Current weight...'></input>
      <input id='desired-weight' type='number' placeholder='Desired weight...'></input>

    </form>
  </main>
  );
}