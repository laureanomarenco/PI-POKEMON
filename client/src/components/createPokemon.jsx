export default function CreatePokemon() {
  return (
    <form>
        <label>Name</label>
        <input name='name' type="text"/>

        <label>HP</label>
        <input name='hp' type="text"/>

        <label>Attack</label>
        <input name='attack' type="text"/>

        <label>Defense</label>
        <input name='defense' type="text"/>

        <label>Velocity</label>
        <input name='velocity' type="text"/>

        <label>Height</label>
        <input name='height' type="text"/>

        <label>Weight</label>
        <input name='weight' type="text"/>
        
        <input type="submit" value="Submit" />     
    </form>
  )
}
