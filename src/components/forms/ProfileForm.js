import React from 'react';

export default ({me, inputChange, submit, updateStatus}) => {
  return (
    <div className="section">
      <p className="title is-4">About me</p>
      <form onSubmit={(e) => submit(e)}>
        <div className="columns is-mobile">
          <div className="column">
            <label className="label has-text-grey">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Write your name here" name="name"
                value={me.name} onChange={inputChange} autoComplete="off"/>
            </div>
          </div>
          <div className="column">
            <label className="label has-text-grey">Surname</label>
            <div className="control">
              <input className="input" type="text" placeholder="Write your surname here" name="surname"
                value={me.surname} onChange={inputChange} autoComplete="off"/>
            </div>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column">
            <label className="label has-text-grey">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Your email here" name="email"
                value={me.email} onChange={inputChange} />
            </div>
          </div>
          <div className="column">
            <label className="label has-text-grey">Date of birth</label>
            <div className="control">
              <input className="input" type="date" placeholder="01-01-2000" name="dateOfBirth" autoComplete="off"
                value={me.date_of_birth == null ? undefined : me.date_of_birth} onChange={inputChange}/>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-grey">Description</label>
          <div className="control">
            <textarea className="textarea" placeholder="Explain something about yourself" name="description"
              value={me.description} onChange={inputChange} autoComplete="off"></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Save</button>
          </div>
          <div className="control">
            <p className="button is-primary" style={{display: !updateStatus ? 'none':'block'}}>
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>Updated</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
