using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VerhuisHulp.Models;

namespace VerhuisHulp.Controllers
{
    [Produces("application/json")]
    [Route("api/DeadlineItem")]
    public class DeadlineItemController : Controller
    {
        private readonly VerhuisHulpContext _context;

        public DeadlineItemController(VerhuisHulpContext context)
        {
            _context = context;
        }

        // GET: api/DeadlineItem
        [HttpGet]
        public IEnumerable<DeadlineItem> GetDeadlineItem()
        {
            return _context.DeadlineItem;
        }

        // GET: api/DeadlineItem/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDeadlineItem([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var deadlineItem = await _context.DeadlineItem.SingleOrDefaultAsync(m => m.Id == id);

            if (deadlineItem == null)
            {
                return NotFound();
            }

            return Ok(deadlineItem);
        }

        // PUT: api/DeadlineItem/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeadlineItem([FromRoute] string id, [FromBody] DeadlineItem deadlineItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != deadlineItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(deadlineItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeadlineItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DeadlineItem
        [HttpPost]
        public async Task<IActionResult> PostDeadlineItem([FromBody] DeadlineItem deadlineItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.DeadlineItem.Add(deadlineItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeadlineItem", new { id = deadlineItem.Id }, deadlineItem);
        }

        // DELETE: api/DeadlineItem/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeadlineItem([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var deadlineItem = await _context.DeadlineItem.SingleOrDefaultAsync(m => m.Id == id);
            if (deadlineItem == null)
            {
                return NotFound();
            }

            _context.DeadlineItem.Remove(deadlineItem);
            await _context.SaveChangesAsync();

            return Ok(deadlineItem);
        }

        private bool DeadlineItemExists(string id)
        {
            return _context.DeadlineItem.Any(e => e.Id == id);
        }
    }
}