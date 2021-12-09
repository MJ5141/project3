import React from 'react'

const Footer = () => {
  return (
    <div class="bg-black-900">
      <footer class="bg-black-200 py-7 text-gray-100 text-l flex justify-between">
      <div>
        &copy; FitLand<i class=" text-red-500 fas fa-walking"></i>.com
      </div>

      <div class="space-x-3">
          <a href="https://www.instagram.com/theiconicau/"> <i class="fab fa-instagram"></i> </a>
          <a href="https://www.facebook.com/IconicAU/"><i class="fab fa-facebook"></i> </a>
          <a href="https://twitter.com/theiconicau?lang=en/"><i class="fab fa-twitter"></i> </a>
          <a href="https://www.instagram.com/theiconicau/"><i class="far fa-envelope"></i> </a>
          <a href="https://twitter.com/theiconicau?lang=en/"><i class="fas fa-phone-alt"></i> </a>
      </div>

      </footer>
    </div>
  )
}

export default Footer;
