


const Contact =()=>{
    return(
        <div id="contact">
            <hr />
            <h1 className="pt-12 text-center font-serif text-6xl pb-6">Contact Us</h1>

  <div className="flex items-center justify-center min-h-screen">
    
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Why Are You Waiting For <br />Plan Your Visit</h2>
      
      <form className="space-y-4">
         {/* Name Field  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" type="text" id="name" placeholder="Enter your full name" required>
          </input>
        </div>
        
         {/* Email Field  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" type="email" id="email" placeholder="Enter your email" required>
          </input>
        </div>
        
         {/* Select Place Field  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="place">Choose a Place</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" id="place" required>
            <option value="" disabled selected>Select a place</option>
            <option value="paris">Maree</option>
            <option value="tokyo">Sawat</option>
            <option value="new-york">Gilgit</option>
            <option value="sydney">Naran Kaghan </option>
            <option value="sydney">Hunza Valley</option>
            <option value="sydney">Skardu Valley</option>

          </select>
        </div>

         {/* Date Field  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="date">Preferred Date</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" type="date" id="date" required>
          </input>
        </div>
        
        {/* Notes Field  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="notes">Additional Notes </label>
          <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" id="notes"  placeholder="Enter any special requests or details"></textarea>
        </div>

         {/* Submit Button  */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>




        </div>
    )
}

export default Contact