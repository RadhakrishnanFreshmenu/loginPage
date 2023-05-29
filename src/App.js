import './App.css';
import logo from './assets/logo1.png';
import user from './assets/user.png';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className='flex h-screen'>

        <div className='flex flex-col w-1/2 h-screen bg-purple-400'>

          <div className='flex h-1/4 items-center justify-center'>
            <img src={logo} alt='' className='w-1/6 h-1/2 max-w-full max-h-full mt-4 ml-4'></img>
            <text className='w-5/6 max-w-full max-h-full text-xs ml-4'>Untitled UI</text>
          </div>

          <div className='flex-row h-1/3 items-center justify-center'>
            <div className='flex flex-col items-center'>
              <p className='text-xs font-bold text-center mt-2 w-3/5'>We have been using this tool to start every new project and can't imagine working without it</p>
              <img src={user} alt='' className='w-1/6 h-1/3 max-w-full  mt-2'/>
            </div>
          </div>

          <div className='flex flex-col h-1/4 items-center justify-start'>
            <text className='text-white text-xs font-bold text-center mt-2 w-3/5'>Frankie Sullivan</text>
            <text className='text-gray-300 text-xs w-3/5 text-center'>Head of Design, Starlight Labs.</text>

            <div class="flex items-center justify-center mt-1">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>

          </div>

          <div className='h-1/6'>
            <text class="absolute bottom-0 left-0 mt-2 text-xs">&copy;Untitled UI 2077</text>
          </div>


        </div>

        <div className='flex flex-col w-1/2 h-screen bg-white items-center justify-center'>

          <div className='flex items-center justify-center'>
            <div className='flex flex-col justify-start flex-wrap'>
              <img src={logo} alt='' className='w-1/6 h-1/3 max-w-full max-h-full mt-2 ml-4'/>
              <div className="ml-4 flex flex-col">
                <text className="w-auto mt-2 text-base font-bold">Sign in</text>
                <text className="w-4/5 mt-2 text-sm ">Welcome back! Please enter your details.</text>
              </div>

              {/* Reusable input and button components */}

              <Input type="text" className="w-3/4 mt-2 ml-4 border border-gray-400" placeholder="Email"></Input>
              <Input type="text" className="w-3/4 mt-2 ml-4 border border-gray-400" placeholder="Password"></Input>

              <Button className="bg-purple-400 ml-4 mt-2 w-3/4" disabled>Sign in</Button>
              <Button className="bg-white ml-4 border border-gray-400 mt-1 w-3/4" disabled><span class="fa fa-google google"/>Sign in with Google</Button>
              <Button className="bg-white ml-4 border border-gray-400 mt-1 w-3/4" disabled><span class="fa fa-apple apple"/>Sign in with Apple ID</Button>
              
              <text class="mt-2 ml-4 w-auto text-sm ">Need an account?&nbsp;<strong>Create an account</strong></text>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;