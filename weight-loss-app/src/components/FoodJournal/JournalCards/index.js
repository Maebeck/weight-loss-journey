import React from 'react';
import JournalModal from '../JournalModals';


function JournalCards() {
    return (
<main>
<div class="card col-lg-2">
  <div class="card-body">
    <h5 class="card-title">Sunday</h5>
    <h4>Food Consumed:</h4>
    <h4>Total Calories:</h4>
    {/* <form>
      <input>What have you eaten today?</input>
      <input>How many calories were in that?</input>
    </form> */}
    <button onClick={JournalModal} href="#" class="btn btn-primary">Add</button>
    <button href="#" class="btn btn-primary">Clear</button>
  </div>
</div>
<div class="card col-lg-2">
  <div class="card-body">
    <h5 class="card-title">Monday</h5>
    <h4>Food Consumed:</h4>
    <h4>Total Calories:</h4>
    {/* <form>
      <input>What have you eaten today?</input>
      <input>How many calories were in that?</input>
    </form> */}
    <button href="#" class="btn btn-primary">Add</button>
    <button href="#" class="btn btn-primary">Clear</button>
  </div>
</div>
<div class="card col-lg-2">
  <div class="card-body">
    <h5 class="card-title">Tuesday</h5>
    <h4>Food Consumed:</h4>
    <h4>Total Calories:</h4>
    {/* <form>
      <input>What have you eaten today?</input>
      <input>How many calories were in that?</input>
    </form> */}
    <button href="#" class="btn btn-primary">Add</button>
    <button href="#" class="btn btn-primary">Clear</button>
  </div>
</div>
<div class="card col-lg-2">
  <div class="card-body">
    <h5 class="card-title">Wednesday</h5>
    <h4>Food Consumed:</h4>
    <h4>Total Calories:</h4>
    {/* <form>
      <input>What have you eaten today?</input>
      <input>How many calories were in that?</input>
    </form> */}
    <button href="#" class="btn btn-primary">Add</button>
    <button href="#" class="btn btn-primary">Clear</button>
  </div>
</div>
<div class="card col-lg-2">
  <div class="card-body">
    <h5 class="card-title">Thursday</h5>
    <h4>Food Consumed:</h4>
    <h4>Total Calories:</h4>
    {/* <form>
      <input>What have you eaten today?</input>
      <input>How many calories were in that?</input>
    </form> */}
    <button href="#" class="btn btn-primary">Add</button>
    <button href="#" class="btn btn-primary">Clear</button>
  </div>
</div>
<div class="card col-lg-2">
  <div class="card-body">
    <h5 class="card-title">Friday</h5>
    <h4>Food Consumed:</h4>
    <h4>Total Calories:</h4>
    {/* <form>
      <input>What have you eaten today?</input>
      <input>How many calories were in that?</input>
    </form> */}
    <button href="#" class="btn btn-primary">Add</button>
    <button href="#" class="btn btn-primary">Clear</button>
  </div>
</div>
<div class="card col-lg-2">
  <div class="card-body">
    <h5 class="card-title">Saturday</h5>
    <h4>Food Consumed:</h4>
    <h4>Total Calories:</h4>
    {/* <form>
      <input>What have you eaten today?</input>
      <input>How many calories were in that?</input>
    </form> */}
    <button href="#" class="btn btn-primary">Add</button>
    <button href="#" class="btn btn-primary">Clear</button>
  </div>
</div>
</main>
    )
};

export default JournalCards;