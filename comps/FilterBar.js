import React ,{ useState , useEffect } from 'react'
import styles from '../styles/comps/FilterBar.module.scss'

import { FamilyFilterFunc, SowingFilterFunc , HarvestFilterFunc , OrderProductsFunc} from '../utils/filterfunction'

function FilterBar({products, setAllProducts}) {

  const [ familyFilter, setFamilyFilter ] = useState("all-family")
  const [ sowingFilter, setSowingFilter ] = useState("all-month")
  const [ harvestFilter, setHarvestFilter ] = useState("all-month")
  const [ sorter, setSorter ] = useState("alpha");

  useEffect(() => {
    const filteredByFamily = FamilyFilterFunc(products, familyFilter)
    const filterBySowing = SowingFilterFunc(filteredByFamily, sowingFilter)
    const filterByHarvest = HarvestFilterFunc(filterBySowing, harvestFilter)
    const orderedProducts = OrderProductsFunc(filterByHarvest, sorter)
    setAllProducts(orderedProducts)
  },[familyFilter,sowingFilter, harvestFilter, sorter])

  return (
    <div className={styles.filterbar_container}>
      <label htmlFor="familyFilter">Famille : </label>
      <select name="familyFilter" id="familyFilter" value={familyFilter} onChange={(e) => setFamilyFilter(e.target.value)}>
        <option value="all-family">Toutes les familles</option>
        <option value="aromatique">Plantes Aromatique</option>
        <option value="feuille">Légumes Feuilles</option>
        <option value="fruit">Légumes Fruits</option>
        <option value="graine">Légumes Graines</option>
        <option value="racine">Légumes Racines</option>
      </select>
      <label htmlFor="sowingFilter">Mois de semis : </label>
      <select name="sowingFilter" id="sowingFilter" value={sowingFilter} onChange={(e) => setSowingFilter(e.target.value)}>
        <option value="all-month">---</option>
        <option value="janvier">Janvier</option>
        <option value="fevrier">Février</option>
        <option value="mars">Mars</option>
        <option value="avril">Avril</option>
        <option value="mai">Mai</option>
        <option value="juin">Juin</option>
        <option value="juillet">Juillet</option>
        <option value="aout">Aout</option>
        <option value="septembre">Septembre</option>
        <option value="octobre">Octobre</option>
        <option value="novembre">Novembre</option>
        <option value="decembre">Décembre</option>
      </select>
      <label htmlFor="harvestFilter">Mois de récolte : </label>
      <select name="harvestFilter" id="harvestFilter" value={harvestFilter} onChange={(e) => setHarvestFilter(e.target.value)}>
        <option value="all-month">---</option>
        <option value="janvier">Janvier</option>
        <option value="fevrier">Février</option>
        <option value="mars">Mars</option>
        <option value="avril">Avril</option>
        <option value="mai">Mai</option>
        <option value="juin">Juin</option>
        <option value="juillet">Juillet</option>
        <option value="aout">Aout</option>
        <option value="septembre">Septembre</option>
        <option value="octobre">Octobre</option>
        <option value="novembre">Novembre</option>
        <option value="decembre">Décembre</option>
      </select>
        
        <label htmlFor="sorter">Trier par :</label>
        <select name="sorter" id="sorter" value={sorter} onChange={(e) => setSorter(e.target.value)}>
            <option value="alpha">---</option>
            <option value="ascending">Prix croissant</option>
            <option value="descending">Prix décroissant</option>
        </select>
    </div>
  )
}

export default FilterBar