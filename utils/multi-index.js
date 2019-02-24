const EMPTY_SET = new Set()

/**
 * @class MultiIndex
 *
 * Index values by chains of keys. Useful to find object by key-value pairs
 * they contain.
 */
module.exports = class MultiIndex {

  constructor() {
    this.root = new Map()
    this.sets = new Set()
  }

  _createSet(indexKeys) {
    const newSet = new Set()
    newSet.indexKeys = indexKeys
    this.sets.add(newSet)
    return newSet
  }

  _parents(keys, create=false) {
    const parents = []
    let parent = this.root
    parents.push(parent)
    for (let i = 0; i < keys.length; i++) {
      if (!(parent.has(keys[i]))) {
        if (!create) return []
        const newColl = (i === keys.length-1) ? this._createSet(keys) : new Map()
        parent.set(keys[i], newColl)
      }
      parent = parent.get(keys[i])
      parents.push(parent)
    }
    return parents
  }

  _delete(keys, id) {
    const parents = this._parents(keys)
    if (parents.length === 0) return
    if (typeof id !== 'undefined')
      parents[parents.length-1].delete(id)
    for (let i = keys.length - 1; i >= 0; i--) {
      if (parents[i].size > 0) break
      if (this.sets.has(parents[i]))
        this.sets.delete(parents[i])
      parents[i-1].delete(keys[i])
    }
  }

  unindex(id) {
    this.sets.forEach(set => {
      if (set.has(id)) this._delete(set.indexKeys, id)
    })
  }

  index(keys, id) {
    if (!(Array.isArray(keys))) keys = [keys]
    const parents = this._parents(keys, true)
    return parents[parents.length-1].add(id)
  }

  get(keys) {
    if (!(Array.isArray(keys))) keys = [keys]
    const parents = this._parents(keys)
    return parents[parents.length-1] || EMPTY_SET
  }

}
