import React from 'react';

export default ({me, inputChange, submit}) => {
  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Write your name here" name="name"
            value={me.name} onChange={inputChange} autoComplete="off"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Surname</label>
        <div className="control">
          <input className="input" type="text" placeholder="Write your surname here" name="surname"
            value={me.surname} onChange={inputChange} autoComplete="off"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="Your email here" name="email"
            value={me.email} onChange={inputChange} />
        </div>
      </div>
      <div className="field">
        <label className="label">Date of birth</label>
        <div className="control">
          <input className="input" type="date" placeholder="01-01-2000" name="dateOfBirth" autoComplete="off"
            value={me.date_of_birth == null ? undefined : me.date_of_birth} onChange={inputChange}/>
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea className="textarea" placeholder="Explain something about yourself" name="description"
            value={me.description} onChange={inputChange} autoComplete="off"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Save</button>
        </div>
        <div className="control">
          <button className="button is-text">Cancel</button>
        </div>
      </div>
    </form>
  );
}
