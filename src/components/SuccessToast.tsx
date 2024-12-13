
function SuccessToast({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-strong-grey text-white px-6 py-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
                <span className="text-2xl">✔</span>
                <div>
                    <p className="font-bold">Message Sent!</p>
                    <p>Thanks for completing the form. We’ll be in touch soon!</p>
                </div>
                <button 
                    className="ml-4 text-xl font-bold" 
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
        </div>
    );
}

export default SuccessToast;