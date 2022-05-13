
function TopBar() {
  return (
    <div className="sticky top-0 z-50 flex flex-col items-center">
      <div className="flex items-center justify-center bg-neutral-900 h-8 w-screen">
        <span className="font-poppins font-bold text-white text-xs">FREE SHIPPING ON ORDER OF 50 DOLLARS</span>
      </div>
      <div className="grid grid-cols-3 h-16 w-screen bg-red-500 font-poppins text-white">
        <div className="text-center">Logo</div>
        <div className="flex items-center justify-between">
          <div>Home</div>
          <div>Categories</div>
          <div>Contacts</div>
          <div>Support</div>
        </div>
        <div className="text-center">Icons</div>
      </div>
    </div>
  )
}

export default TopBar