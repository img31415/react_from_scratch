module.exports = mongoose => {
    const user = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          description: String,
        },
        { timestamps: true }
      )
    );
  
    return user;
  };