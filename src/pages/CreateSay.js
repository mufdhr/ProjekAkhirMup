export const CreateSay = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const { says, setSays } = useContext(SayContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const sayToEdit = says[id];
      if (sayToEdit) {
        setTitle(sayToEdit.title);
        setNote(sayToEdit.note);
      }
    }
  }, [id, says]);

  const handleUpdate = (e) => { 
    e.preventDefault();
    const newSays = [...says];
    if (id) {
      newSays[id] = { title, note };
    } else {
      newSays.push({ title, note });
    }
    setSays(newSays);
    navigate('/view');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">{id ? 'Edit Say' : 'Create Say'}</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Subject:</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-2 border-purple-400 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Note:</label>
            <textarea 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full p-2 border-2 border-pink-400 rounded-md h-64"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md font-semibold hover:bg-purple-600 transition"
          >
            {id ? 'Update' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};
