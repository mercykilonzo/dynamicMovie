import Image from "next/image";

const Login = () => {
  return (
    <div>
     

      <div className="flex gap-50 items-center h-screen bg-gray-100 overflow-y-hidden m-10 ml-30 mr-30 overflow-hidden text-black">
        <Image src="/images/image.png" alt="Signup image" width={700} height={100} />
        <div>
          <form>
            <h1 className="text-3xl text-black font-bold">LOGIN</h1>
            <br />
            <p >Enter your details below</p>
            <br />
            <input type="email" placeholder="Email or Phone Number" className="border-b-2 border-gray-300 p-2 pr-30 " />
            <br /><br />
            <input type="password" placeholder="Password" className="border-b-2 border-gray-300 p-2 pr-30" />
            <br /><br />
            <button type="submit" className="bg-blue-800 text-white py-3 px-9">Log In</button> <span className="pl-32 pt-[-50] text-blue-800">Forget Password?</span>


          </form>

        </div>
      </div>
     

    </div>
  )
}
export default Login;