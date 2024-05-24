import './layout/Reg.css'

function Registration(){
	return(
		<>
		<div className='box'>
		<form >
				<h1>Profiler</h1>
			<div className="form">
				<div>
				<input type="name" name="name" placeholder='Name'/>
				<input type="e-mail" name="e-mail" placeholder='E-mail'/>
				<input type="phone" name="phone" placeholder='Phone'/>
				</div>
				<label htmlFor='checkbox' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2em', flexDirection: 'column'}}>
					<img src = './public/BOSS.JPG' style={{width: '2em', height: '2em'}}/>
					<input style={{width: '0.5em', height: '0.5em'}} type="checkbox" name="checkbox" placeholder='Checkbox'/>
					BOSS
				</label>
				<div>
				<input type="login" name="username" placeholder='Username'/>
				<input type="password" name="password" placeholder='Password'/>
				<input type="company" name="company" placeholder='Company'/>
				</div>
			</div>
				<button className="but">Registration</button>
		</form>
		</div>
		</>
	)
}
export default Registration;