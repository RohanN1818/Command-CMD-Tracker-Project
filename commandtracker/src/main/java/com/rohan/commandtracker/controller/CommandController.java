
package com.rohan.commandtracker.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.rohan.commandtracker.model.Command;
import com.rohan.commandtracker.service.Commandservice;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/commands")
public class CommandController {

    private final Commandservice service;

    // Constructor Injection
    public CommandController(Commandservice service) {
        this.service = service;
    }

    // ✅ POST - Add Command
    @PostMapping
    public Command addCommand(@RequestBody Command command) {
        return service.saveCommand(command);
    }

    // ✅ GET - Get All Commands
    @GetMapping
    public List<Command> getAllCommands() {
        return service.getAllCommands();
    }

    // ✅ DELETE - Delete Command by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCommand(@PathVariable Long id) {
        service.deleteCommand(id);
        return ResponseEntity.ok("Command deleted successfully");
    }
}