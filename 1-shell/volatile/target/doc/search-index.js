var searchIndex = {};
searchIndex["volatile"] = {"doc":"Wrapper types that guarantee read-only, write-only, or read/write volatile access to a raw pointer.","items":[[3,"ReadVolatile","volatile","A wrapper type that enforces read-only volatile accesses to a raw pointer.",null,null],[3,"WriteVolatile","","A wrapper type that enforces write-only volatile accesses to a raw pointer.",null,null],[3,"Volatile","","A wrapper type that enforces volatile (read or write) accesses to a raw pointer.",null,null],[3,"UniqueVolatile","","A wrapper type that enforces volatile (read or write) accesses to a raw pointer. Implements `Sync + Send`.",null,null],[8,"Readable","","Trait implemented by readable volatile wrappers.",null,null],[10,"inner","","Returns the inner pointer.",0,null],[11,"read","","Reads and returns the value pointed to by `self`. The read is always done using volatile semantics.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"has_mask","","Returns `true` if the value pointed to by `self` has the mask `mask`. This is equivalent to `(self.read() & mask) == mask`.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"bool"}}],[8,"Writeable","","Trait implemented by writeable volatile wrappers.",null,null],[10,"inner","","Returns the inner pointer. This function is unsafe because this returns a copy of the mutable pointer, resulting in a mutable alias.",1,null],[11,"write","","Writes the value `val` to the inner address of `self`. The write is always done using volatile semantics.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[8,"ReadableWriteable","","Trait implemented by readable and writeable volatile wrappers.",null,null],[11,"and_mask","","Applies the mask `mask` using `&` to the value referred to by `self`. This is equivalent to `self.write(self.read() & mask)`.",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"or_mask","","Applies the mask `mask` using `|` to the value referred to by `self`. This is equivalent to `self.write(self.read() | mask)`.",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"inner","","",3,null],[11,"new","","Returns a new `ReadVolatile` that allows volatile read-only access to `ptr`.",3,null],[11,"inner","","",4,null],[11,"new","","Returns a new `WriteVolatile` that allows volatile write-only access to `ptr`.",4,null],[11,"inner","","",5,null],[11,"inner","","",5,null],[11,"new","","Returns a new `Volatile` that allows volatile read/write access to `ptr`.",5,null],[11,"inner","","",6,null],[11,"inner","","",6,null],[11,"new","","Returns a new `UniqueVolatile` that allows volatile read/write access to `ptr`.",6,null]],"paths":[[8,"Readable"],[8,"Writeable"],[8,"ReadableWriteable"],[3,"ReadVolatile"],[3,"WriteVolatile"],[3,"Volatile"],[3,"UniqueVolatile"]]};
initSearch(searchIndex);