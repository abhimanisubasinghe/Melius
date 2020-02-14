//import logo200Image from 'assets/img/logo/logo_200.png';
//import PropTypes from 'prop-types';
import React, { Component } from 'react';
//import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { login } from './UserFunction'


//class AuthForm extends React.Component 
class AuthForm extends Component{
//////////////////
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    login(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqqq');
        console.log(res.state);
        if(res.state){
          this.props.history.push('http://localhost:3000',{detail: res})
          
        }
        else{
          this.props.history.push('/');
        }
      }
    })
  }

////////////////////

  // get isLogin() {
  //   return this.props.authState === STATE_LOGIN;
  // }

  // get isSignup() {
  //   return this.props.authState === STATE_SIGNUP;
  // }

  // changeAuthState = authState => event => {
  //   event.preventDefault();

  //   this.props.onChangeAuthState(authState);
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  // };

  // renderButtonText() {
  //   const { buttonText } = this.props;

  //   if (!buttonText && this.isLogin) {
  //     return 'Login';
  //   }

  //   if (!buttonText && this.isSignup) {
  //     return 'Signup';
  //   }

  //   return buttonText;
  // }

  // render() {
  //   const {
  //     showLogo,
  //     usernameLabel,
  //     usernameInputProps,
  //     passwordLabel,
  //     passwordInputProps,
  //     confirmPasswordLabel,
  //     confirmPasswordInputProps,
  //     children,
  //     onLogoClick,
  //   } = this.props;

  //   return (
  //     <Form onSubmit={this.handleSubmit}>
  //       {showLogo && (
  //         <div className="text-center pb-4">
  //           <img
  //             src={logo200Image}
  //             className="rounded"
  //             style={{ width: 60, height: 60, cursor: 'pointer', }}
  //             alt="logo"
  //             onClick={onLogoClick}
  //           />
  //         </div>
  //       )}
  //       <FormGroup>
  //         <Label for={usernameLabel}>{usernameLabel}</Label>
  //         <Input {...usernameInputProps} />
  //       </FormGroup>
  //       <FormGroup>
  //         <Label for={passwordLabel}>{passwordLabel}</Label>
  //         <Input {...passwordInputProps} />
  //       </FormGroup>
  //       {this.isSignup && (
  //         <FormGroup>
  //           <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
  //           <Input {...confirmPasswordInputProps} />
  //         </FormGroup>
  //       )}
  //       <FormGroup check>
  //         <Label check>
  //           <Input type="checkbox" />{' '}
  //           {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
  //         </Label>
  //       </FormGroup>
  //       <hr />
  //       <Button
  //         size="lg"
  //         className="bg-gradient-theme-left border-0"
  //         block
  //         onClick={this.handleSubmit}>
  //         {this.renderButtonText()}
  //       </Button>

  //       <div className="text-center pt-1">
  //         <h6>or</h6>
  //         <h6>
  //           {this.isSignup ? (
  //             <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
  //               Login
  //             </a>
  //           ) : (
  //             <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
  //               Signup
  //             </a>
  //           )}
  //         </h6>
  //       </div>

  //       {children}
  //     </Form>
  //   );
  // }

  render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className='h3 mb-3 font-weight-m=normal'>Sing In</h1>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input type="text"
                            className='form-control'
                            name ='username'
                            placeholder="User Name"
                            value={this.state.username}
                            onChange={this.onChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type="password"
                            className='form-control'
                            name ='password'
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}/>
                        </div>
                        <button type='submit'
                        className='btn btn-lg btn-primary btn-block'>
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}





}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

// AuthForm.propTypes = {
//   authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
//   showLogo: PropTypes.bool,
//   usernameLabel: PropTypes.string,
//   usernameInputProps: PropTypes.object,
//   passwordLabel: PropTypes.string,
//   passwordInputProps: PropTypes.object,
//   confirmPasswordLabel: PropTypes.string,
//   confirmPasswordInputProps: PropTypes.object,
//   onLogoClick: PropTypes.func,
// };

// AuthForm.defaultProps = {
//   authState: 'LOGIN',
//   showLogo: true,
//   usernameLabel: 'Username',
//   usernameInputProps: {
//     type: 'email',
//     placeholder: 'user name',
//   },
//   passwordLabel: 'Password',
//   passwordInputProps: {
//     type: 'password',
//     placeholder: 'your password',
//   },
//   confirmPasswordLabel: 'Confirm Password',
//   confirmPasswordInputProps: {
//     type: 'password',
//     placeholder: 'confirm your password',
//   },
//   onLogoClick: () => {},
// };

export default AuthForm;
