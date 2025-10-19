export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🌿 StopDrugs</h3>
            <p className="text-gray-400">
              Fighting drug harm through education and combating cannabis misinformation with science.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Crisis Resources</h3>
            <div className="space-y-2 text-gray-400">
              <p>SAMHSA Helpline: <a href="tel:1-800-662-4357" className="text-green-400 hover:underline">1-800-662-4357</a></p>
              <p>Crisis Text Line: Text HOME to <a href="sms:741741" className="text-green-400 hover:underline">741741</a></p>
              <p>Suicide Prevention: <a href="tel:988" className="text-green-400 hover:underline">988</a></p>
              <p>Emergency: <a href="tel:911" className="text-red-400 hover:underline">911</a></p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p className="text-gray-400">
              Our mission is to educate people about the real dangers of harmful drugs while 
              advocating for evidence-based cannabis legalization and combating decades of misinformation.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} StopDrugs NGO. Information for educational purposes only.</p>
          <p className="mt-2 text-sm">If you or someone you know needs help, please reach out to the resources above.</p>
        </div>
      </div>
    </footer>
  );
}
